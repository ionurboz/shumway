/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: Multitouch
module Shumway.AVM2.AS.flash.ui {
  import somewhatImplemented = Shumway.Debug.somewhatImplemented;
  import notImplemented = Shumway.Debug.notImplemented;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  export class Multitouch extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];
    
    constructor () {
      false && super();
      notImplemented("Dummy Constructor: public flash.ui.Multitouch");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    // static _inputMode: string;
    // static _supportsTouchEvents: boolean;
    // static _supportsGestureEvents: boolean;
    // static _supportedGestures: ASVector<any>;
    // static _maxTouchPoints: number /*int*/;
    // static _mapTouchToMouse: boolean;
    get inputMode(): string {
      notImplemented("public flash.ui.Multitouch::get inputMode"); return;
      // return this._inputMode;
    }
    set inputMode(value: string) {
      value = asCoerceString(value);
      notImplemented("public flash.ui.Multitouch::set inputMode"); return;
      // this._inputMode = value;
    }
    get supportsTouchEvents(): boolean {
      somewhatImplemented("public flash.ui.Multitouch::get supportsTouchEvents");
      return false;
      // return this._supportsTouchEvents;
    }
    get supportsGestureEvents(): boolean {
      somewhatImplemented("public flash.ui.Multitouch::get supportsGestureEvents");
      return false;
      // return this._supportsGestureEvents;
    }
    get supportedGestures(): ASVector<any> {
      somewhatImplemented("public flash.ui.Multitouch::get supportedGestures");
      return null;
      // return this._supportedGestures;
    }
    get maxTouchPoints(): number /*int*/ {
      somewhatImplemented("public flash.ui.Multitouch::get maxTouchPoints");
      return 0;
      // return this._maxTouchPoints;
    }
    get mapTouchToMouse(): boolean {
      somewhatImplemented("public flash.ui.Multitouch::get mapTouchToMouse");
      return true;
      // return this._mapTouchToMouse;
    }
    set mapTouchToMouse(value: boolean) {
      value = !!value;
      notImplemented("public flash.ui.Multitouch::set mapTouchToMouse"); return;
      // this._mapTouchToMouse = value;
    }
    
  }
}
