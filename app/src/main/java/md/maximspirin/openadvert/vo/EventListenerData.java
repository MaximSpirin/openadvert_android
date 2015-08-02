package md.maximspirin.openadvert.vo;

import md.maximspirin.openadvert.events.AppEventListener;

/**
 * Created by maxim_000 on 7/28/2015.
 */
public class EventListenerData {

    private String _type;
    private AppEventListener _listener;

    public EventListenerData(String type, AppEventListener listener){
        _type = type;
        _listener = listener;
    }

    public String getType(){
        return _type;
    }

    public AppEventListener getListener(){
        return _listener;
    }

}
