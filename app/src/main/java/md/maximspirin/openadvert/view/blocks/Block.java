package md.maximspirin.openadvert.view.blocks;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.view.View;

import org.json.JSONObject;

/**
 * Created by maxim_000 on 7/25/2015.
 */
public class Block extends View {

    //protected
    protected Object blockConfig;

    //private
    private String _id;
    private double _x;
    private double _y;
    private double _width;
    private double _height;
    private String _contentScaleMode;
    private Paint p;
    private Rect rect;


    public Block(Context context, JSONObject blockConfig){
        super(context);
        this.blockConfig = blockConfig;
        p = new Paint();
        rect = new Rect();
    }

    /**
     * Overridden methods
     * @param canvas
     */

    @Override
    protected void onDraw(Canvas canvas) {
        //super.onDraw(canvas);

        //fill canvas with a color
        //canvas.drawARGB(80, 102, 204, 255);

        p.setColor(0xFF00FF00);
        p.setStyle(Paint.Style.FILL);
        //define rect
        rect.set(0,0,500,500);
        //draw rect to canvas
        canvas.drawRect(rect, p);
    }


    /**
     * Private methods
     */
    private void parseBlockConfig(){

    }

}
