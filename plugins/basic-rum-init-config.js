// We attempt to read Config needed for BOOMR.init()
window.basicRumInitConfig = BOOMR.window.basicRumBoomerangConfig;

if (window.basicRumInitConfig) {
  BOOMR.init(window.basicRumInitConfig);
}
