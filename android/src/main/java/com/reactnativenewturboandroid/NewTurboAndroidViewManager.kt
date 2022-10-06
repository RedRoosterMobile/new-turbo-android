package com.reactnativenewturboandroid

import android.graphics.Color
import android.util.Log
import android.view.View
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

// import com.facebook.react.bridge.ReactMethod
// import com.facebook.react.bridge.Promise

class NewTurboAndroidViewManager : SimpleViewManager<NativeNumberGeneratorView>() {

  companion object {
    const val EXAMPLE_METHOD = 666
    const val EXAMPLE_METHOD_2 = 999
  }


  override fun getName() = "NewTurboAndroidView"

  override fun createViewInstance(reactContext: ThemedReactContext): NativeNumberGeneratorView {
    return NativeNumberGeneratorView(reactContext)
  }
  // props
  @ReactProp(name = "color")
  fun setColor(view: View, color: String) {
    view.setBackgroundColor(Color.parseColor(color))
  }

  @ReactProp(name = "initialNumber")
  fun setInitialNumberProp(view: NativeNumberGeneratorView, initialNumber: Int) {
    view.setInitalNumber(initialNumber)
  }

  // methods callable on native
  // https://github.com/erisvaldojunior/react-native-new-canvas/blob/527164cd2e62138ca1cf1ce5333eb9b0c004282a/android/src/main/java/com/reactnativenewcanvas/NewCanvasViewManager.kt
  override fun getCommandsMap(): MutableMap<String, Int> {
    return mutableMapOf(
      "exampleMethod" to EXAMPLE_METHOD,
      "exampleMethod2" to EXAMPLE_METHOD_2
    );
  }

  override fun receiveCommand(
    root: NativeNumberGeneratorView,
    commandId: Int,
    args: ReadableArray?
  ) {
    Log.d("receivedcommand", args.toString())
    when (commandId) {
      EXAMPLE_METHOD -> {
        Log.d("NewCanvasViewMan meth1", args.toString())
        if (args != null) {
          // FYI: automatic cast
          root.setInitalNumber(1)
        }
      }
      EXAMPLE_METHOD_2 -> {
        Log.d("NewCanvasViewMan meth2", args.toString())
        if (args != null) {
          root.setInitalNumber(2)
        }
      }
    }

  }
  // events to RN
  override fun getExportedCustomDirectEventTypeConstants(): MutableMap<String, Any> {
    return MapBuilder.of(
      "onNumberSend",
      MapBuilder.of("registrationName", "onNumberSend")
    )
  }
}
