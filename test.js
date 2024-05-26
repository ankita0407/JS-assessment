/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name ,city , haircolor , weight , dob) {
    let NFT = {
        name: name,
        city: city,
        haircolor: haircolor,
        weight: weight,
        dob: dob,
    }
    NFTContainer.push(NFT);
   console.log("Minted "+ name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n--VOGUE MODELS--\n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("city: " + NFTContainer[i].city);
        console.log("haircolor: " + NFTContainer[i].haircolor);
        console.log("weight: " + NFTContainer[i].weight);
        console.log("dob: " + NFTContainer[i].dob);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("total number of NFTs are - :" + NFTContainer.length);

}

// call your functions below this line
mintNFT("John", "Chandigarh", "Black","60kg"," 26-05-2001");
mintNFT("Jack", "Noida", "Grey","1kg"," 29-09-2000");
mintNFT("Oggy", "Pune", "Black","5kg","28-10-2003");
mintNFT("Jenner", "Delhi", "Red"," 73kg"," 14-07-2000");
listNFTs();
getTotalSupply();
