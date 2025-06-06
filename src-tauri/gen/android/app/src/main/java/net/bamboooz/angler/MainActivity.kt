package net.bamboooz.angler

import android.os.Build
import android.os.Bundle
import android.graphics.Color
import android.view.WindowManager
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat

class MainActivity : TauriActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Make both bars fully transparent
        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT

        // Enable dark icons (light system UI appearance)
        val controller = WindowInsetsControllerCompat(window, window.decorView)
        
        controller.isAppearanceLightStatusBars = true
        controller.isAppearanceLightNavigationBars = true

        // Handle display cutout (notch)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            window.attributes.layoutInDisplayCutoutMode =
                WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
        }
    }
}
