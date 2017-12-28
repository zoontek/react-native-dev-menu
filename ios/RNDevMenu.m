#import <React/RCTDevMenu.h>
#import "RNDevMenu.h"

@implementation RNDevMenu

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"customDevOptionTap"];
}

RCT_EXPORT_METHOD(addItem:(NSString *)name)
{
  [self.bridge.devMenu addItem:[RCTDevMenuItem buttonItemWithTitleBlock:^NSString *{
    return name;
  } handler:^{
    [self sendEventWithName:@"customDevOptionTap" body:name];
  }]];
}

@end
