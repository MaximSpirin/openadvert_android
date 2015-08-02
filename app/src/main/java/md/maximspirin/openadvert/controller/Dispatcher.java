package md.maximspirin.openadvert.controller;


import android.util.Log;

import md.maximspirin.openadvert.events.AppEvent;
import md.maximspirin.openadvert.events.AppEventListener;
import md.maximspirin.openadvert.vo.EventListenerData;

import java.util.ArrayList;

/**
 * Created by maxim_000 on 7/27/2015.
 */

public class Dispatcher{

    static private Dispatcher _instance;

    private ArrayList<EventListenerData> listeners;

    public Dispatcher(){
        if(_instance!=null){
            throw new Error("Only one instance of Dispatcher is allowed!");
        }

        initialize();

        Log.i(null,"Dispatcher created.");
    }

    static public Dispatcher getInstance(){
        if(_instance == null){
            _instance = new Dispatcher();
        }
        return _instance;
    }

    public void dispatchEvent(AppEvent event){
        for(EventListenerData eventListener : listeners){
           if(eventListener.getType().equals(event.getName())){
               eventListener.getListener().onEvent(event);
           }
        }
    }

    public AppEventListener addEventListener(String type, AppEventListener listener){

        /*boolean pairExists = false;

        // search for the same pair and if it exists - do nothing
        for(EventListenerData listenerData : listeners){
            if(listenerData.getListener() == listener && listenerData.getType() == type){
                pairExists = true;
                break;
            }
        }

        if(!pairExists){
            EventListenerData eld = new EventListenerData(type, listener);
            this.listeners.add(eld);
        }*/

        EventListenerData eld = new EventListenerData(type, listener);
        this.listeners.add(eld);

        return listener;
    }

    public void removeEventListener(String type, AppEventListener listener){
        for(EventListenerData eventListenerData : listeners){
            if(eventListenerData.getListener() == listener && eventListenerData.getType().equals(type)){
                this.listeners.remove(eventListenerData);
                break;
            }
        }
    }

    private void initialize() {
        //create listeners collection
        this.listeners = new ArrayList<EventListenerData>();
    }
}
