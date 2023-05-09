#import <React/RCTEventEmitter.h>

#ifdef RCT_NEW_ARCH_ENABLED

#import <RNDevMenuSpec/RNDevMenuSpec.h>
@interface RNDevMenu : RCTEventEmitter <NativeRNDevMenuSpec>

#else

#import <React/RCTBridgeModule.h>
@interface RNDevMenu : RCTEventEmitter <RCTBridgeModule>

#endif

@end
