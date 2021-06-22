// TO-DO:
module.exports = ({ models }) => {
    // return false;
    Object.keys(models).forEach(file => {
        // Create model file & append a declareAll statement w/ required packages.
        console.log(`Model iteration (Create Modal File): ${file}`);
        // itereate through model object
        Object.keys(models[file]).forEach(properties => {
            console.log(`Model iteration ( Append Property/ies ): ${properties}`)
            properties.split("/").forEach(key => {
                Object.values(models[file][`${properties}`]).forEach(value => {
                    console.log(`Model iteration (key/Value): ${key}/${value}`)
                })
            })
        })

    })
}