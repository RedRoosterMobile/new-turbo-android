package com.reactnativenewturboandroid

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactMethod
import android.app.Activity


class NewTurboAndroidModule(reactContext: ReactApplicationContext?) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "NewTurboAndroidModule"
  }

  @ReactMethod
  fun multiply(a: Int, b: Int, promise: Promise) {
    promise.resolve(a * b)
  }
  /*
  private val stContext: ReactApplicationContext?
  val activity: Activity?
    get() = currentActivity

  init {
    stContext = reactContext
  }*/
}
