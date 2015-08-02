package md.maximspirin.openadvert.events;

import java.util.EventObject;

/**
 * Created by maxim_000 on 7/27/2015.
 */
public class AppEvent extends EventObject {
    private Object _data;
    private String _name;

    static public final String CONFIG_LOADED = "config_loaded";
    static public final String CONFIG_UPDATE = "config_update";
    static public final String ADSCHEDULE_UPDATE = "adschedule_update";

    public AppEvent(Object source, String name, Object data){
        super(source);
        _name = name;
        _data = data;
    }

    public Object getData(){
        return _data;
    }

    public String getName(){
        return _name;
    }
}
