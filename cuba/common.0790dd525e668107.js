"use strict";(self.webpackChunkcuba=self.webpackChunkcuba||[]).push([[592],{4292:(c,h,e)=>{e.d(h,{T:()=>s});var r=e(8260),a=e(4090),t=e(4522);class s{constructor(i){this.http=i}create(i){return this.http.post(`${r.N.apiUrl}/v1/zones`,i)}createtown(i){return this.http.post(`${r.N.apiUrl}/v1/towns`,i)}createcountry(i){return this.http.post(`${r.N.apiUrl}/v1/countries`,i)}GetCountries(){return this.http.get(`${r.N.apiUrl}/v1/countries`)}GetZones(){return this.http.get(`${r.N.apiUrl}/v1/zones`)}GetTowns(){return this.http.get(`${r.N.apiUrl}/v1/towns`)}GetConfiguration(){return this.http.get(`${r.N.apiUrl}/v1/configuration`)}GenerateInfobip(){return this.http.get(`${r.N.apiUrl}/v1/configuration/initinfobip`)}createConfig(i){return this.http.post(`${r.N.apiUrl}/v1/configuration`,i)}}s.\u0275fac=function(i){return new(i||s)(a.LFG(t.eN))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})},7593:(c,h,e)=>{e.d(h,{o:()=>n});var r=e(3405),a=e(8805),t=e(4090),s=e(5581);class n{constructor(o,u,_){this.accountService=o,this.templateRef=u,this.viewContainerRef=_,this.destroy$=new r.xQ}set jhiHasAnyAuthority(o){this.authorities=o,this.updateView(),this.accountService.currentUser.pipe((0,a.R)(this.destroy$)).subscribe(()=>{this.updateView()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateView(){const o=this.accountService.hasAnyAuthority(this.authorities);this.viewContainerRef.clear(),o&&this.viewContainerRef.createEmbeddedView(this.templateRef)}}n.\u0275fac=function(o){return new(o||n)(t.Y36(s.e),t.Y36(t.Rgc),t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","jhiHasAnyAuthority",""]],inputs:{jhiHasAnyAuthority:"jhiHasAnyAuthority"}})},7736:(c,h,e)=>{e.d(h,{T:()=>t});var r=e(4090),a=e(4522);class t{constructor(n){this.http=n,this.API_URL="assets/data/country.json",this.showLoader=!1}GetCountry(){return this.http.get(this.API_URL)}}t.\u0275fac=function(n){return new(n||t)(r.LFG(a.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}}]);