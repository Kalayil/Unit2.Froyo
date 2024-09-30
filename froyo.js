let flavors = prompt("Enter a list of froyo flavors separated by commas (e.g., vanilla, chocolate, strawberry):");

if (flavors) { 
    
    let flavorArray = flavors.split(",");

    let flavorCount = {};

    for (let i = 0; i < flavorArray.length; i++) {
        // Remove any extra spaces and convert the flavor to lowercase
        let flavor = flavorArray[i].trim().toLowerCase();

        // If the flavor already exists in the object, increase the count
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            // If the flavor doesn't exist in the object yet, add it with a count of 1
            flavorCount[flavor] = 1;
        }
    }
    
    console.log("Froyo Order Summary:");
    for (let flavor in flavorCount) {
        console.log(flavor + ": " + flavorCount[flavor]);
    }
} else {
    console.log("No input provided.");
}
