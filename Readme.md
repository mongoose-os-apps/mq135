# MQ135 GAS SENSOR for Mongoose OS 


Mongoose OS api for MQ135 Air Quality sensor (CO2 meter) Based on [ViliusKraujutis] MQ135 library for Arduino.

![mq135](https://cloud.githubusercontent.com/assets/22281426/26542295/a6d47538-4459-11e7-957c-e0506749db4e.jpg)

![mq135pins](https://cloud.githubusercontent.com/assets/22281426/26542297/a8808f02-4459-11e7-9a68-f8c36cf6f3e6.jpg)

## Getting Started

1. Download and install [Mongoose OS]. 
2. You have a complete [documentation] and [video] tutorials about Mongoose OS.


## Usage of MQ135

Any GPIO pin with ADC capability can be used

```bash
MQ.MQ135.attach(pin);
```

You can use ambient temperature/humidity correction factor:

```bash
MQ.MQ135.getCorrectedPPM(temperature, humidity);
```

> **Note:**
> - This type of sensor needs 24h after powered to "warning-up" (calibration).


## Build instructions

```bash
cd path/to/your/project/root
mos build --arch ARCH        # Build the firmware. ARCH: esp8266, esp32, cc3200, stm32
mos flash                    # Flash the firmware
mos console                  # Attach a serial console and see device logs
```
or 

```bash
cd path/to/your/project/root
mos flash mos-[NameOfYourMicrocontroller] # esp8266, esp32, cc3200, stm32
cd fs/
mos put api_mq.js
mos put init.js
mos console
```

[ViliusKraujutis]: <https://github.com/GeorgK/MQ135/blob/master/MQ135.cpp>

[documentation]: <https://mongoose-os.com/docs/>

[Mongoose OS]: <https://mongoose-os.com/software.html>

[video]: <https://mongoose-os.com/video-tutorials.html>
