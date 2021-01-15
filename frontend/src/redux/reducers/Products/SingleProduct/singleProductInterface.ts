interface LaptopDetail {
    displaySizeInches?: string,
    resolutionPixels?: string,
    screenResolution?: string,
    displayType?: string,
    proccessorType?: string,
    proccessorCores?: string,
    processorMemoryCache?: string,
    processorClockSpeed?: string,
    processorMaxClockSpeed?: string,
    graphicsProcessor?: string,
    ram?: string,
    ssdStorage?: string,
    usbTwoPointOPorts?: string,
    usbCPorts?: string,
    cardReader?: string,
    webCam?: string,
    wifi?: string,
    operatingSystem?: string,
    manufacturersWarantty?: string,
    exist?: boolean
}

interface TVsDetail {
    screenSizes?: string,
    screenType?: string,
    screenResolution?: string,
    resolutionInPixel?: string,
    refreshRate?: string,
    wifi?: string,
    usbPorts?: string,
    sizeHeightWidthDepth?: string,
    warranty?: string,
    exist?: boolean
}

interface PhoneDetail {
    phoneOperatingSystem?: string,
    networkCompability?: string,
    DualSim?: string,
    Colour?: string,
    DeviceScreen?: string,
    Resolution?: string,
    InternalMemory?: string,
    FrontCamera?: string,
    RearCamera?: string,
    Processor?: string,
    Wifi?: string,
    Warranty?: string,
    exist?: boolean
}

interface HeadphoneDetail {
    HeadphoneType?: string,
    Colour?: string,
    VoiceControl?: string,
    NoiseReductionType?: string,
    BuiltInMicrophone?: string,
    Warranty?: string,
    exist?: boolean
}

interface GameDetail {
    Platform: string,
    GamingGerne: string,
    Rating: string,
    ConsumerAdvice: string,
    GameDeveloper: string,
    GamePublisher: string,
    exist?: boolean
}


export interface SingleProduct {
    rating: number,
    numReviews: number,
    price: number,
    onSale: number,
    countInStock: number,
    numOf5StarsReviews: number,
    numOf4StarsReviews: number,
    numOf3StarsReviews: number,
    numOf2StarsReviews: number,
    numOf1StarsReviews: number,
    _id: string,
    name: string,
    image: string,
    description: string,
    brand: string,
    category: string,
    youtube: string,
    details: LaptopDetail,
    tvsDetail: TVsDetail,
    phoneDetal: PhoneDetail,
    headphoneDetail: HeadphoneDetail,
    gameDetail: GameDetail,
    user: string,
    reviews?: any[],
    createdAt: Date,
    updatedAt: Date
}
