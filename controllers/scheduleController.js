const collectionData = require("../db/data/cb-garbage-data2026.json");
const formatDate = require("../helpers/dateHelper");


const getCollectionInfo = (req, res) => {

    const addressQuery = req.query.address;

    // Normalize address to match dataset format
    const address = addressQuery ? addressQuery.toUpperCase().trim() : null;

    const today = new Date();
    const todayStr = today.toISOString().split("T")[0]; // YYYY-MM-DD

    let isGarbageDay = false;
    let nextPickup = null;
    let recyclingType = null;
    let specialPickup = null;

    let records = null;

    if (address && collectionData[address]) {
        records = collectionData[address]; 
    } else if (address) {
        const matchKey = Object.keys(collectionData).find(key => 
            key.includes(address)
        );

        if (matchKey) {
            records = collectionData[matchKey];
        }
    }

    if (records) {
        // Sort records by date (in case data doesn't do that)
        records.sort((a, b) => new Date(a.Date) - new Date(b.Date));

        // Find today or next upcoming pickup
        for (let record of records) {

            if (record.Date === todayStr) {
                // Today is garbage day
                isGarbageDay = true;
                nextPickup = formatDate(record.Date);
                recyclingType = record.RecType;
                specialPickup = record.SpecialPickUP;
                break;
            }

            if (record.Date > todayStr && !nextPickup) {
                // First future date
                nextPickup = formatDate(record.Date);
                recyclingType = record.RecType;
                specialPickup = record.SpecialPickUP;
            }


        }
    }

    // check that you found an address is found
    if (!nextPickup) {
        nextPickup = "No schedule found";
        recyclingType = "N/A";
        specialPickup = null;
    }

    res.render("schedule", {
        currentDate: `Today's Date: ${today.toDateString()}`,
        isGarbageDay,
        nextPickup,
        recyclingType,
        specialPickup,
        address: addressQuery || ""
    });
};

module.exports = getCollectionInfo;