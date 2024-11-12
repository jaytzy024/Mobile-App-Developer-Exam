# Mobile-App-Developer-Exam

**Installation Instructions:**

1.Clone the Repository:
  
  bash:
    
    git clone https://github.com/jaytzy024/mobile-app-developer-exam.git
    cd mobile-app-developer-exam

2.Install Ionic CLI Globally:
    
  bash: 
    
    npm install -g @ionic/cli

3.Open the Project in Visual Studio Code.
  
  - Launch Visual Studio Code and open the project folder.
  
  - Optional: Install the Ionic Extension in Visual Studio Code for easier integration.

4.Run on Web Browser.
 
  
  - You can run the app in the browser with the following command:
  
  bash:

    ionic serve
  - (on browser use inspect element to check the design in mobile view)
  
  - Alternatively, if using the Ionic Extension, go to the extension’s menu, select Run, and then choose Web to open the project in a new VS Code window.

5.Run on Android Emulator (Android Studio required)
 
  - Ensure Android Studio and its required components are installed and configured for Capacitor.
  
  - To run on Android:
    
    bash:
 
        ionic capacitor run android

6.Run on iOS Emulator (Mac with Xcode required)
 
  - Ensure you’re on a Mac with Xcode installed for iOS support.
  
  - To run on IOS:
    
    bash:
 
        ionic capacitor run ios

