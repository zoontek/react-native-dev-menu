require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name           = "RNDevMenu"
  s.summary        = "Add custom items to the React Native dev menu"
  s.version        = package['version']

  s.authors        = { "Mathieu Acthernoene" => "zoontek@gmail.com" }
  s.homepage       = "https://github.com/zoontek/react-native-dev-menu"
  s.license        = "MIT"
  s.platform       = :ios, "9.0"

  s.source         = { :git => "https://github.com/zoontek/react-native-dev-menu.git" }
  s.source_files   = "ios/**/*.{h,m}"
  s.exclude_files  = "example/**/*"

  s.dependency       "React-Core"
  s.dependency       "React-DevSupport"
  s.dependency       "React-RCTNetwork"
end
