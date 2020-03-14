#import <React/RCTDevMenu.h>
#import "RNDevMenu.h"

@interface RNDevMenu ()

@property (nonatomic, strong) NSMutableArray<NSString *> *names;

@end

@implementation RNDevMenu

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"customDevOptionTap"];
}

RCT_EXPORT_METHOD(addItem:(NSString *)name
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
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

@end
