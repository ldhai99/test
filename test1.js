/**
 * 
 */
s   =   '{"address":"","email":"123@123.com","name":"test5","id":"6"}'; 
data=eval('(' +s+ ')');

console.log(data["name"])
var c={};
c[data]="1";
console.log(c[data])
console.log(data["name"])
console.log("ok")

eclipse.buildId=4.5.2.M20160212-1500
java.version=1.7.0_75
java.vendor=Oracle Corporation
BootLoader constants: OS=win32, ARCH=x86, WS=win32, NL=zh_CN
Framework arguments:  -product org.eclipse.epp.package.jee.product -product org.eclipse.epp.package.jee.product
Command-line arguments:  -os win32 -ws win32 -arch x86 -product org.eclipse.epp.package.jee.product -data E:\Users\ldh1\webspace -product org.eclipse.epp.package.jee.product

This is a continuation of log file E:\Users\ldh1\webspace\.metadata\.bak_4.log
Created Time: 2017-04-23 11:28:25.247

org.eclipse.core.expressions
Error
Sun Apr 23 11:28:45 CST 2017
No property tester contributes a property mapreduce.deployable to type class org.eclipse.core.internal.resources.Project
