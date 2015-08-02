package md.maximspirin.openadvert.services;

/**
 * Created by maxim_000 on 7/31/2015.
 */
public class ServiceLocator {

    static private ServiceLocator instance;

    private JSONService jsonService;

    public ServiceLocator(){
        if(ServiceLocator.instance!=null){
            throw new Error("Only one instance of ServiceLocator is allowed!");
        }else{
            initialize();
        }
    }

    public static ServiceLocator getInstance(){
        if(instance == null){
            instance = new ServiceLocator();
        }
        return instance;
    }

    public JSONService getJsonService(){
        return jsonService;
    }

    private void initialize(){
        jsonService = new JSONService();
    }

}
