package md.maximspirin.openadvert.services;

import md.maximspirin.openadvert.utils.ServiceListener;

/**
 * Created by maxim_000 on 7/31/2015.
 */
public class JSONService extends Service {

    static public final String CONFIG_FILE_NAME = "config.js";
    static public final String ADSCHEDULE_FILE_NAME = "adschedule.js";

    public JSONService(){

    }

    public void loadMainConfig(ServiceListener listener){
        Object loadTool = new Object();
        callMap.put(loadTool, listener);

        ServiceListener getBackListener = (ServiceListener) callMap.get(loadTool);
        callMap.remove(loadTool);

        ServiceListener onceAgain = (ServiceListener) callMap.get(loadTool);
        System.out.println("o");


        //
    }



}
