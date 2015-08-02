package md.maximspirin.openadvert;

import android.content.res.AssetManager;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.ViewGroup;


import md.maximspirin.openadvert.controller.Dispatcher;
import md.maximspirin.openadvert.events.AppEvent;
import md.maximspirin.openadvert.events.AppEventListener;
import md.maximspirin.openadvert.model.Model;
import md.maximspirin.openadvert.services.ServiceLocator;
import md.maximspirin.openadvert.utils.ServiceListener;
import md.maximspirin.openadvert.view.blocks.Block;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.InputStream;


public class Main extends AppCompatActivity{

    private Model model;
    private Dispatcher dispatcher;
    private md.maximspirin.openadvert.services.ServiceLocator serviceLocator;

    private AppEventListener configUpdateListener;
    private AppEventListener adscheduleUpdateListener;
    private String[] fileList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        init();


        AssetManager am = getAssets();

        try{
           fileList = am.list("default_startup_assets/media");
        }catch (java.io.IOException error){
            Log.e(null, error.getMessage());
        }

        drawShape();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_open_advert, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    /**
     * private functions
     */

    private void init(){
        //init singletones
        model = Model.getInstance();
        dispatcher = Dispatcher.getInstance();
        serviceLocator = ServiceLocator.getInstance();

        //add event listeners
        configUpdateListener = dispatcher.addEventListener(AppEvent.CONFIG_UPDATE, new AppEventListener() {
            @Override
            public void onEvent(AppEvent appEvent) {
                Log.i(null, "Config update handler");
                this.toString();
            }
        });

        adscheduleUpdateListener = dispatcher.addEventListener(AppEvent.ADSCHEDULE_UPDATE, new AppEventListener() {
            @Override
            public void onEvent(AppEvent appEvent) {
                Log.i(null,"Adschedule update handler");
            }
        });

        Object myObject = new Object();


        //load startup assets
        serviceLocator.getJsonService().loadMainConfig(new ServiceListener() {
            @Override
            public void onSuccess() {

            }

            @Override
            public void onFailure() {

            }
        });


       // model.setMainConfig(new Object());
       // model.setAdschedule(new Object());
    }

    private void drawShape(){

        JSONObject blockConfig = null;

        try{
            blockConfig = new JSONObject("{}");
        }catch(JSONException exception){
            Log.e(null,"Error!");
        }

        Block block = new Block(this.getApplicationContext(), blockConfig);

        ViewGroup.LayoutParams layoutParams = new ViewGroup.LayoutParams(300,300);


        setContentView(block, layoutParams);

        block.invalidate();

    }


    private void createVideoBlock(){

    }
}
