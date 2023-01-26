#include <iostream>
#include <fstream>
#include <json/json.h>
#include <string>


using namespace std;
using namespace Json;
const string Input = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Beat Saber\\Beat Saber_Data\\CustomWIPLevels\\BeatMapv2 - Copy\\EasyStandard.dat";
const string Output = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Beat Saber\\Beat Saber_Data\\CustomWIPLevels\\BeatMapv2 - Copy\\ExpertPlusStandard.dat";




int main() {
	
	ifstream jsonFile(Input);
	ifstream jsonFileOut(Output);
	
	Json::Value difficulty;
	Json::Value outDiff;
	Json::Reader reader;
	reader.parse(jsonFile, difficulty);
	reader.parse(jsonFileOut, outDiff);
	
	
	difficulty["_customData"] = Json::Value(Json::objectValue);
	difficulty["_customData"]["_environment"] = Json::Value(Json::arrayValue);
	difficulty["_customData"]["_customEvents"] = Json::Value(Json::arrayValue);

	Json::Value walls = difficulty["_obstacles"];
	Json::Value notes = difficulty["_notes"];
	
	

	std::cout << "notes before: " << notes << std::endl;
	for (int i = 0; i < notes.size(); i++) {
		if (!notes[i].isMember("_customData")) {
			notes[i]["_customData"] = Json::Value(Json::objectValue);
		}
	}
	//std::cout << "notes after: " << notes << std::endl;


	

	

	std::ofstream outputFile(Output);
	outputFile << difficulty;

	return 0;
	return 0;

	
	
	
	
}