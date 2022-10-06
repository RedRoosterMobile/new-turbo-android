package com.reactnativenewturboandroid


import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter



class NativeNumberGeneratorView:LinearLayout {
  var myContext: ThemedReactContext
  var number: Int = 0
  constructor(context: ThemedReactContext): super(context) {
    this.myContext = context
    init()
  }

  fun setInitalNumber(number: Int) {
    this.number = number
    this.updateRandomNumberLabel()
  }

  private fun updateRandomNumberLabel() {
    val randomNumberLabel:TextView = findViewById(R.id.randomNumber)
    randomNumberLabel.text = "" + this.number
  }

  private fun init() {
    inflate(myContext,R.layout.generator_layout,this)
    val randomNumberButton: Button = findViewById(R.id.randomButton)
    val sendToReactNativeButton: Button = findViewById(R.id.sendToRN)

    randomNumberButton.setOnClickListener {
      this.number = (0 until 1000).shuffled().last()
      this.updateRandomNumberLabel()
    }

    sendToReactNativeButton.setOnClickListener {
      var args: WritableMap = Arguments.createMap()
      args.putInt("nativeNumber", this.number)
      this.myContext.getJSModule(RCTEventEmitter::class.java).receiveEvent(
      getId(),
      "onNumberSend",
      args)
    }
  }




}
