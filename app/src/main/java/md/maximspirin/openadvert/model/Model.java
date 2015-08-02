package md.maximspirin.openadvert.model;

import android.util.Log;

import md.maximspirin.openadvert.controller.Dispatcher;
import md.maximspirin.openadvert.controller.Dispatcher;
import md.maximspirin.openadvert.events.AppEvent;

/**
 * Created by maxim_000 on 7/27/2015.
 */
public class Model {

    static private Model _instance;

    private Object mainConfig;
    private Object adschedule;
    private Dispatcher dispatcher;


    public Model(){
        if(_instance!=null){
            throw new Error("Just one instance of Model class is allowed!");
        }
        initialize();
        Log.i(null,"Model created");
    }

    static public Model getInstance(){
        if(_instance==null){
            _instance = new Model();
        }
        return _instance;
    }

    public void setMainConfig(Object value){
        mainConfig = value;
        //notify listeners
        dispatcher.dispatchEvent(new AppEvent(this, AppEvent.CONFIG_UPDATE, null));
    }

    public void setAdschedule(Object value){
        adschedule = value;
        dispatcher.dispatchEvent(new AppEvent(this, AppEvent.ADSCHEDULE_UPDATE, null));
    }

    private void initialize(){
        dispatcher = Dispatcher.getInstance();
    }



}
