package md.maximspirin.openadvert.services;

import android.support.v4.util.SimpleArrayMap;

import md.maximspirin.openadvert.controller.Dispatcher;
import md.maximspirin.openadvert.model.Model;

/**
 * Created by maxim_000 on 7/31/2015.
 */
public class Service {

    protected Model model;
    protected Dispatcher dispatcher;
    protected SimpleArrayMap callMap;

    public Service(){
        initialize();
    }

    private void initialize(){
        callMap = new SimpleArrayMap();
        model = Model.getInstance();
        dispatcher = Dispatcher.getInstance();
    }

}
