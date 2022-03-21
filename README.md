# eterlast-tech-test

## For this technical test, I have taken a look at how I would implement the fake NFT minting design.

I chose GitHub for the hosting of this repository as I have used it so far with no issues and I find the platform to be reliable.

For this I chose to start the test by using the Redux TypeScript template as it includes Redux Toolkit and a small boilerplate app, to increase the time I have available for writing the code as it is my first project built with the MetaMask API after reading the documentation.
I shall add comments for each section of the app as soon as I get to finish writing the app, in order to keep a clean self-documenting code.

I imagined this as a very simple app, that would only have a collection input box and a Mint button.
The collection input box would be for having a name for the collections of the NFT batches, and it would be optional.
I then wanted to also display some basic information from the NFT`s and I've decided that the name, collection name, description, assetID and picture would be a good choice. I will display them in a single column on multiple rows.
These 2 would require me to create 2 React components which would be displayed. One for the input box and the Mint button, one for displaying a single NFT.

I then thought that I must create the Redux Toolkit methods to set the state for the wallet and assets.
I did not wish to always set the wallet ID and the network for each run of the minting process hence I decided to create 2 different actions.
One to set the metadata of the wallet and network, which would only be ran when the app would be initialized, and one to be adding the new batches to the assets array every time the user would click the Mint button.
