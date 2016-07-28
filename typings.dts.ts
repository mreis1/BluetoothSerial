interface ICordovaBluetoothSerial {

    connect (macAddress?:any, success?:any, failure?:any):void

    // Android only - see http://goo.gl/1mFjZY
    connectInsecure (macAddress?:any, success?:any, failure?:any):void
        
    disconnect (success?:any, failure?:any):void

    list (success?:any, failure?:any):void

    isEnabled(success?:any, failure?:any):void

    isConnected(success?:any, failure?:any):void

    available(success, failure):void

    // read all the data in the buffer
    read(success?:any, failure?:any):void

    // reads the data in the buffer up to and including the delimiter
    readUntil(delimiter?:any, success?:any, failure?:any):void 

    // writes data to the bluetooth serial port
    // data can be an ArrayBuffer, string, integer array, or Uint8Array
    write (data?:any, success?:any, failure?:any):void

    // calls the success callback when new data is available
    subscribe(delimiter?:any, success?:any, failure?:any):void

    // removes data subscription
    unsubscribe(success?:any, failure?:any):void
        
    // calls the success callback when new data is available with an ArrayBuffer
    subscribeRawData(success?:any, failure?:any):void


    // removes data subscription
    unsubscribeRawData(success?:any, failure?:any):void

    // clears the data buffer
    clear(success?:any, failure?:any):void

    // reads the RSSI of the *connected* peripherial
    readRSSI(success?:any, failure?:any):void
        

    showBluetoothSettings(success?:any, failure?:any)

    enable(success?:any, failure?:any):void

    discoverUnpaired(success?:any, failure?:any):void

    setDeviceDiscoveredListener(notify?:any):void

    clearDeviceDiscoveredListener():void

    setName(newName):void

    setDiscoverable(discoverableDuration?:any):void
}

declare var bluetoothSettings: ICordovaBluetoothSerial;
