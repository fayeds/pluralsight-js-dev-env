export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockAPI') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url)
{
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    //alert(regex);
    //alert(results);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));

}
