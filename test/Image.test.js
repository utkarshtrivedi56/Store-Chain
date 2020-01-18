const Image = artifacts.require("Image");
require('chai').use(require('chai-as-promised')).should()

contract('Image',(accounts)=>{
    let image
    before(async()=>{
        image = await Image.deployed()
    })

    describe('deployment',async()=>{

        it('deployed successfully',async()=>{
            const address = image.address
            //console.log(address)
            assert.notEqual(address,' ');
            assert.notEqual(address,null);
            assert.notEqual(address,undefined);
            assert.notEqual(address,'0x0');
        })
    })

    describe('storage',async()=>{

        it("update the hash",async()=>{
            let img = 'kjnckjnldnclkl8983iu1'
            await image.set(img)
            const result = await image.get()
            assert.equal(img, result) 
        })
    })
})