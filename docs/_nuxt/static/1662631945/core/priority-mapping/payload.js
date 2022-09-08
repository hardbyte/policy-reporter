__NUXT_JSONP__("/core/priority-mapping", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:[{document:{slug:"priority-mapping",description:y,title:"Priority Mapping",position:13,category:"Policy Reporter",toc:[{id:z,depth:A,text:B},{id:C,depth:D,text:E},{id:F,depth:D,text:G},{id:H,depth:A,text:I}],body:{type:"root",children:[{type:b,tag:k,props:{},children:[{type:a,value:"Priorities are used to decide if a result should be sent to a "},{type:b,tag:f,props:{},children:[{type:a,value:"Target"}]},{type:a,value:" with configured "},{type:b,tag:g,props:{},children:[{type:a,value:"minimumPriority"}]},{type:a,value:" and how it should be displayed."}]},{type:a,value:c},{type:b,tag:J,props:{id:z},children:[{type:b,tag:q,props:{ariaHidden:r,href:"#how-priority-is-determined",tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"The "},{type:b,tag:f,props:{},children:[{type:a,value:"priority"}]},{type:a,value:" of a PolicyReportResult depends by default on its "},{type:b,tag:f,props:{},children:[{type:a,value:"result"}]},{type:a,value:" and "},{type:b,tag:f,props:{},children:[{type:a,value:"severity"}]},{type:a,value:" value."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Options in ascending order are: "},{type:b,tag:g,props:{},children:[{type:a,value:"debug"}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:w}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:v},{type:b,tag:g,props:{},children:[{type:a,value:L}]}]},{type:a,value:c},{type:b,tag:M,props:{id:C},children:[{type:b,tag:q,props:{ariaHidden:r,href:"#defaults",tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Passed results have "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Warn results have "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Error results have "},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Fail results without severities have "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Fail results with low severity have "},{type:b,tag:f,props:{},children:[{type:a,value:x}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Fail results with medium severity have "},{type:b,tag:f,props:{},children:[{type:a,value:w}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Fail results with high severity have "},{type:b,tag:f,props:{},children:[{type:a,value:K}]},{type:a,value:j}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:M,props:{id:F},children:[{type:b,tag:q,props:{ariaHidden:r,href:"#custom-policy-priorities",tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"If you want to change the priority of PolicyReportResults based on the "},{type:b,tag:f,props:{},children:[{type:a,value:"Policy"}]},{type:a,value:", you can configure a "},{type:b,tag:f,props:{},children:[{type:a,value:"priority map"}]},{type:a,value:". This map can assign one priority per policy or a default priority which is used for all results without severity or a concrete mapping to their related policy."}]},{type:a,value:c},{type:b,tag:"code-group",props:{},children:[{type:a,value:h},{type:b,tag:N,props:{label:"Helm 3",active:y},children:[{type:a,value:c},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:"# values.yaml"}]},{type:a,value:"\n\n"},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:T}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:V}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:Y}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:Z}]}]}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:N,props:{label:"config.yaml"},children:[{type:a,value:c},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:T}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:V}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:X}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,l,m]},children:[{type:a,value:Y}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:Z}]}]}]},{type:a,value:h}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:J,props:{id:H},children:[{type:b,tag:q,props:{ariaHidden:r,href:"#severity-of-kyverno-policies",tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Kyverno supports several annotations for its policy CRDs to set additional information in the related PolicyReports. One of these annotations is "},{type:b,tag:g,props:{},children:[{type:a,value:"policies.kyverno.io\u002Fseverity"}]},{type:a,value:" used to set the severity of the related PolicyReportResults. Possible options are "},{type:b,tag:g,props:{},children:[{type:a,value:"low"}]},{type:a,value:", "},{type:b,tag:g,props:{},children:[{type:a,value:"medium"}]},{type:a,value:", and "},{type:b,tag:g,props:{},children:[{type:a,value:"high"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"This allows you to define the priority of your results within the Kyverno policy itself."}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002Fpriority-mapping",extension:".md",createdAt:_,updatedAt:_,to:"\u002Fcore\u002Fpriority-mapping"},prev:{title:"Report Filter",path:"\u002Fen\u002Fcore\u002Freport-filter",to:"\u002Fcore\u002Freport-filter"},next:{title:"API Reference",path:"\u002Fen\u002Fcore\u002Fapi-reference",to:"\u002Fcore\u002Fapi-reference"}}],fetch:{},mutations:[]}}("text","element","\n","span","token","strong","code","\n  ","li"," priority","p","key","atrule","punctuation",":","comment","a","true",-1,"icon","icon-link"," \u003C ","warning","info","","how-priority-is-determined",2,"How Priority is determined","defaults",3,"Defaults","custom-policy-priorities","Custom Policy Priorities","severity-of-kyverno-policies","Severity of Kyverno Policies","h2","critical","error","h3","code-block","div","nuxt-content-highlight","pre","language-yaml","line-numbers","policyPriorities","# used for all fail results without severity or concrete mapping","default"," warning\n  ","# used for all fail results of the require-ns-labels policy independent of the severity","require-ns-labels"," error\n","2022-09-08T10:11:42.828Z")));