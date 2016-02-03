//  Adapter pattern
//	http://www.dofactory.com/javascript/adapter-design-pattern

/**
 * Old service only needs 3 values to run processData
 */
class LegacyService {
    processData(name, value, qty) {

        //perform some logic here

        var orderString = `Sent data with ${name} of ${value} in amount of ${qty} `;

        console.log('LegacyService: ', orderString);
        return orderString;
    }
}

/**
 * New one needs more parameters
 */
class ModernService {
    processData(objectDetails, ...additionalDetails) {

        console.log('ModernService: ', objectDetails, additionalDetails);
        return [objectDetails, additionalDetails];
    }
}

/**
 * Adapter combines those results
 */
class ServiceAdapter {
    convertProcessData(oldServiceResult, ...additionalDetails) {
        var modern = new ModernService();

        modern.processData(oldServiceResult, additionalDetails);

    }

}

module.exports = function() {

    var dataToSend = {
        name: 'Product',
        value: 'Discounted items',
        qty: 20,
        description: 'Lorem ipsum dolorem etc.',
        ip: '122.343.546.665'
    };

    var legacy = new LegacyService();
    var adapter = new ServiceAdapter();

    //doing adapter
    var oldResult = legacy.processData(dataToSend.name, dataToSend.value, dataToSend.qty);
    adapter.convertProcessData(oldResult, dataToSend.description, dataToSend.ip);

}
