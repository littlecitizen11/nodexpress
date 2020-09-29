const _=require('lodash');
const _uuid=require('uuid');

class InMemoryStorage{

    constructor() {
         this.storage = {};
    }
    create(collectionName, item){
        if(!(collectionName in this.storage)) {
            this.storage[collectionName]=[];
        }

        this.storage[collectionName].push(
            {
                property_id: _uuid.v4(),
                item
            }
        )
        return this.storage[collectionName];
    };

    find(collectionName,itemToSearch){
        if((collectionName in this.storage)) {
            return this.storage[collectionName].filter(element=>element.item.username===itemToSearch);
        }
    };
/*    where(collectionName){

    }*/
    remove(collectionName){
        if((collectionName in this.storage)) {
            delete this.storage[collectionName];
        }
    }

}
/*const sharedStorage={};

class InMemorySharedStorage{

    create(collectionName, item){

    }
    find(collectionName, findFunc){

    }
    where(collectionName, where){

    }
    remove(collectionName, findFunc){

    }

}*/

module.exports.InMemoryStorage = InMemoryStorage;