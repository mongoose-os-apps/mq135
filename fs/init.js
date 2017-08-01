/**
* Load timer api
*/
load('api_timer.js');
/**
* Load GPIO api
*/
load('api_gpio.js');
/**
* Load mq api
*/
load('api_mq135.js');

/**
* Set envirenement test temperature
*/
let temperature = 34;
/**
* Set envirenement test humidity 
*/
let humidity = 54;
/**
* Set pin to 0 (ADC of your device) 
*/
let pin = 0;


let rzero =0;

let correctedRZero = 0;

let resistance = 0;

let ppm = 0;

let correctedPPM = 0;

/**
* Conncet pin to MQ api
*/
MQ.MQ135.attach(pin);

/**
* Built-in LED GPIO pin configuration 
*/
let led = ffi('int get_led_gpio_pin()')();  
GPIO.set_mode(led, GPIO.MODE_OUTPUT);
GPIO.write(led,0);

/**
* Read and print value of CO2 in ppm
* Call every 10 second
*/
Timer.set(10000, true, function() {

print('############################ Begin ############################\n');

GPIO.toggle(led);

rzero = MQ.MQ135.getRZero();
correctedRZero = MQ.MQ135.getCorrectedRZero(temperature, humidity);
resistance = MQ.MQ135.getResistance();
ppm = MQ.MQ135.getPPM();
correctedPPM = MQ.MQ135.getCorrectedPPM(temperature, humidity);

print('MQ135 RZero: ',rzero,' Corrected RZero: ',correctedRZero,'\n');
print('Resistance: ',resistance," kohm\n");
print('PPM: ',ppm,' Corrected PPM: ',correctedPPM,' ppm\n');

print('############################ End ##############################\n');

}, null);

