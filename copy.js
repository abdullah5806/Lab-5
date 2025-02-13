import { copyFileSync } from "fs";

copyFileSync("node_modules/keyboardevent-key-polyfill/index.js", "web/keyboardevent-key-polyfill.js");
copyFileSync("node_modules/jquery/dist/jquery.min.js", "web/jquery.min.js");
copyFileSync("node_modules/jquery.terminal/js/jquery.terminal.min.js", "web/jquery.terminal.min.js");
copyFileSync("node_modules/jquery.terminal/js/jquery.mousewheel-min.js", "web/jquery.mousewheel-min.js");
copyFileSync("node_modules/jquery.terminal/css/jquery.terminal.min.css", "web/terminal.css");

Console.WriteLine("Name: Muhammad Abdullah ");
Console.WriteLine("Roll No.: 24-ST-020 ");

int a=20 , b=30 ;
int sum ;
sum = a + b ;
Console.WriteLine($" The Sum of Two Numbers is {sum} ");
