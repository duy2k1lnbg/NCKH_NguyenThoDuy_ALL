#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <AsyncElegantOTA.h>

#define STASSID "Abc"
#define STAPSK  "123456789"
String SERVER = "http://192.168.39.206:8000/WEB_SERVER/";

int TB_1 = D1;
int TB_2 = D2;
int TB_3 = D3;
int TB_4 = D5;

AsyncWebServer server(80);

void setup()
{
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  pinMode(TB_1, OUTPUT);
  pinMode(TB_2, OUTPUT);
  pinMode(TB_3, OUTPUT);
  pinMode(TB_4, OUTPUT);
  WiFi.begin(STASSID, STAPSK);
  while(WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("Kết nối thành công!!!!!");
  Serial.println(STASSID);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  server.on("/" ,HTTP_GET, [](AsyncWebServerRequest * request) 
    {
      request->send(200, "text/piain","Test_esp_so_1.");
    });
  
  AsyncElegantOTA.begin(&server, "Duy", "123456");
  server.begin();
  Serial.println("HTTP server started");
}

void loop()
{
  AsyncElegantOTA.loop();
  while(WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    http.begin(SERVER);
    int Existence = http.GET();
    if(Existence > 0)
    {
      String Load = http.getString();
      Serial.println(Load);
      DynamicJsonBuffer json(512);
      JsonObject& root = json.parseObject(Load);
      int STATUS_1 = root["ID_QUAT_1"]["STATUS"];
      int STATUS_2 = root["ID_QUATTRAN_1"]["STATUS"];
      int STATUS_3 = root["ID_BONGDEN_1"]["STATUS"];
      int STATUS_4 = root["ID_DIEUHOA_1"]["STATUS"];
      Serial.println("========================");

      Serial.println("========================");
      if(STATUS_1 == 1)
      {
        Serial.println("Led 1 Turned ON");
        digitalWrite(TB_1, HIGH);
      }
      else if(STATUS_1 == 0)
      {
        Serial.println("Led 1 Turned OFF");
        digitalWrite(TB_1, LOW);
      }

      if(STATUS_2 == 1)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_2, HIGH);
      }
      else if(STATUS_2 == 0)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_2, LOW);
      }

      if(STATUS_3 == 1)
      {
        Serial.println("Led 1 Turned ON");
        digitalWrite(TB_3, HIGH);
      }
      else if(STATUS_3 == 0)
      {
        Serial.println("Led 1 Turned OFF");
        digitalWrite(TB_3, LOW);
      }
      
      if(STATUS_4 == 1)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_4, HIGH);
      }
      else if(STATUS_4 == 0)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_4, LOW);
      }
    }
    http.end();
  }
  delay(30);
}