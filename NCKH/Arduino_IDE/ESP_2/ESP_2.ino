#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>

#define STASSID "CTD.TNUT"
#define STAPSK  "123456789"
String SERVER = "http://192.168.1.107:5000/WEB_SERVER/";

int TB_1 = D1;
int TB_2 = D2;
int TB_3 = D3;

void setup()
{
  Serial.begin(115200);
  pinMode(TB_1, OUTPUT);
  pinMode(TB_2, OUTPUT);
  pinMode(TB_3, OUTPUT);
  WiFi.begin(STASSID, STAPSK);
  while(WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("Kết nối thành công!!!!!");
}

void loop()
{
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
      int STATUS_7 = root["ID_7"]["STATUS"];
      int STATUS_8 = root["ID_8"]["STATUS"];
      int STATUS_9 = root["ID_9"]["STATUS"];
      Serial.println("========================");
      Serial.println(STATUS_7);
      Serial.println(STATUS_8);
      Serial.println(STATUS_9);
      Serial.println("========================");
      if(STATUS_7 == 1)
      {
        Serial.println("Led 1 Turned ON");
        digitalWrite(TB_1, HIGH);
      }
      else if(STATUS_7 == 0)
      {
        Serial.println("Led 1 Turned OFF");
        digitalWrite(TB_1, LOW);
      }

      if(STATUS_8 == 1)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_2, HIGH);
      }
      else if(STATUS_8 == 0)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_2, LOW);
      }

      if(STATUS_9 == 1)
      {
        Serial.println("Led 1 Turned ON");
        digitalWrite(TB_3, HIGH);
      }
      else if(STATUS_9 == 0)
      {
        Serial.println("Led 1 Turned OFF");
        digitalWrite(TB_3, LOW);
      }
    }
    http.end();
  }
  delay(30);
}