let red=159
let green=176
let blue=138
const content='<label>красный</label><input width="250px" type="range" oninput="fuck(\'r\')" min="0" max="255" step="1" id="red" value="159"><label id="rl">159</label><br/><label>зелёный</label><input type="range" oninput="fuck(\'g\')" width="250px" min="0" max="255" step="1" id="green" value="174"><label id="gl">176</label><br/><label>синий  </label><input type="range" width="250px" oninput="fuck(\'b\')" min="0" max="255" step="1" id="blue" value="138"><label id="bl">138</label>'
function fuck(tp){
    //console.log(jQuery('input').val());
    if(tp=='r'){
        red=parseInt(jQuery('#red').val());
        jQuery('#rl').html(red);
    }else if(tp=='g'){
        green=parseInt(jQuery('#green').val());
        jQuery('#gl').html(green);
    }else if(tp=='b'){
        blue=parseInt(jQuery('#blue').val());
        jQuery('#bl').html(blue);
    }
    jQuery('body').css('backgroundColor',`rgb(${red},${green},${blue})`);
    jQuery('body').css('color',`rgb(${255-red},${255-green},${255-blue})`);
    let ma=(red+green+blue)/3
    jQuery('#h').css('transform',`rotate(${ma}deg)`)
};
jQuery('document').ready(function(){
    jQuery('#pss').click(function(){
        jQuery('#rb').html(content);
    });
});