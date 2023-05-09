#import <React/RCTDevMenu.h>
#import "RNDevMenu.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDevMenuSpec.h"
#endif

@interface RNDevMenu ()

@property (nonatomic, strong) NSMutableArray<NSString *> *names;

@end

@implementation RNDevMenu

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[@"customDevOptionTap"];
}

- (void)addItem:(NSString *)name
        resolve:(RCTPromiseResolveBlock)resolve
         reject:(RCTPromiseRejectBlock)reject {
  if (_names == nil) {
    _names = [NSMutableArray new];
  }
  if ([_names containsObject:name]) {
    return resolve(nil);
  }

  @try {
    [self.bridge.devMenu addItem:[RCTDevMenuItem buttonItemWithTitleBlock:^NSString *{
      return name;
    } handler:^{
      [self sendEventWithName:@"customDevOptionTap" body:name];
    }]];

    [_names addObject:name];
    resolve(nil);
  }
  @catch (NSError *error) {
    reject(@"E_DEV_MENU_ADD_ITEM", error.localizedDescription, error);
  }
}

#ifdef RCT_NEW_ARCH_ENABLED

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeRNDevMenuSpecJSI>(params);
}

#else

RCT_EXPORT_METHOD(addItem:(NSString *)name
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  [self addItem:name
        resolve:resolve
         reject:reject];
}

#endif

@end
