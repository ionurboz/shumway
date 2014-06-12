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
 * limitations undxr the License.
 */
// Class: AS2TextField
module Shumway.AVM2.AS.avm1lib {
  import TextField = Shumway.AVM2.AS.flash.text.TextField;

  export class AS2TextField extends ASNative {

    // Called whenever the class is initialized.
    static classInitializer: any = null;

    // Called whenever an instance of the class is initialized.
    static initializer: any = null;

    // List of static symbols to link.
    static classSymbols: string [] = null; // [];

    // List of instance symbols to link.
    static instanceSymbols: string [] = null;

    constructor (nativeTextField: TextField) {
      false && super();

      this._variable = '';
    }

    private _nativeAS3Object: TextField;
    _variable: string;


    // JS -> AS Bindings

    // AS -> JS Bindings

    _init(nativeTextField: TextField): any {
      this._nativeAS3Object = nativeTextField;
      (<any> nativeTextField)._as2Object = this;
      initDefaultListeners(this);
    }
    get _as3Object(): TextField {
      return this._nativeAS3Object;
    }
    get variable(): any {
      return this._variable;
    }
    set variable(name: any) {
      if (name === this._variable) {
        return;
      }
      this._variable = name;
      var instance = <any> this._nativeAS3Object; // TODO remove any
      var hasPath = name.indexOf('.') >= 0 || name.indexOf(':') >= 0;
      var clip;
      if (hasPath) {
        var targetPath = name.split(/[.:\/]/g);
        name = targetPath.pop();
        if (targetPath[0] == '_root' || targetPath[0] === '') {
          clip = instance.root._getAS2Object();
          targetPath.shift();
          if (targetPath[0] === '') {
            targetPath.shift();
          }
        } else {
          clip = instance._parent._getAS2Object();
        }
        while (targetPath.length > 0) {
          var childName = targetPath.shift();
          clip = clip.asGetPublicProperty(childName) || clip[childName];
          if (!clip) {
            throw new Error('Cannot find ' + childName + ' variable');
          }
        }
      } else {
        clip = instance._parent._getAS2Object();
      }
      if (!clip.asHasProperty(undefined, name, 0)) {
        clip.asSetPublicProperty(name, instance.text);
      }
      instance._addEventListener('advanceFrame', function() {
        instance.text = '' + clip.asGetPublicProperty(name);
      });
    }
  }
}
