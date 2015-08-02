package md.maximspirin.openadvert.events;

import java.util.EventListener;

/**
 * Created by maxim_000 on 7/27/2015.
 */
public interface AppEventListener extends EventListener{
    public void onEvent(AppEvent appEvent);
}
