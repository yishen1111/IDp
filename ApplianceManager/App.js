import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Dimensions,
  Image,
} from 'react-native';

/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';*/


// Get screen width and height
const { width, height } = Dimensions.get('window');


const CoverScreen = () => (
  <SafeAreaView style={styles.coverScreenContainer}>
    <Image
      source={require('./assets/meter icon.png')} // Update with your icon path
      style={styles.coverIcon}
    />
    <Text style={styles.coverText}>SmartMeter+</Text>
  </SafeAreaView>
);

/*const fetchData = () => {
  const [data, setdata] = useState(undefined);

  const getAPIdata = async () => {
    try {
      const url = 'https://94e9-2001-f40-968-34b2-b0a7-c71-506d-8fc.ngrok-free.app';
      let result = await fetch(url);
      result = await result.json();
      console.warn(result);
      setdata(result); // Update the state
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>API Call</Text>
      {data ? (
        <View>
          <Text style={{ fontSize: 30 }}>{energy_data.id}</Text>
          <Text style={{ fontSize: 30 }}>{energy_data.timestamp}</Text>
          <Text style={{ fontSize: 30 }}>{energy_data.vms}</Text>
          <Text style={{ fontSize: 30 }}>{energy_data.ims}</Text>
          <Text style={{ fontSize: 30 }}>{energy_data.power}</Text>
          <Text style={{ fontSize: 30 }}>{energy_data.kwh}</Text>
        </View>
      ) : null}
    </View>
  );
};*/

const appliancesData = [
  { id: '1', name: 'Standing Fan', location: 'Home', status: false },
  { id: '2', name: 'Air Purifier', location: 'Work', status: false },
  { id: '3', name: 'Television', location: 'Home', status: true },
  { id: '4', name: 'Water Dispenser', location: 'Work', status: false }
];


const ApplianceItem = ({ item, onToggle }) => (
  <View style={styles.itemContainer}>
    <View>
      <Text style={styles.applianceName}>{item.name}</Text>
      <Text style={styles.applianceLocation}>{item.location}</Text>
      <Text
              style={[
                styles.applianceStatus,
                { color: appliance.isOn ? 'green' : 'red' }
              ]}
            >
              {appliance.isOn ? 'On' : 'Off'}
      </Text>
    </View>
    <Switch
      value={appliance.isOn}
      onValueChange={() => toggleSwitch(appliance.id)}
 
    />
  </View>
);










const App = () => {
 
  const [currentPage, setCurrentPage] = useState('cover'); // Start with the CoverScreen


  useEffect(() => {
    if (currentPage === 'cover') {
      const timer = setTimeout(() => {
        setCurrentPage('home'); // Automatically switch to HomePage after 2 seconds
      }, 2000);


      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [currentPage]);


  const renderPage = () => {
    switch (currentPage) {
      case 'cover':
        return <CoverScreen />;
      case 'home':
        return <HomePage />;
      case 'stats':
        return <StatsPage />;
      default:
        return <HomePage />;
    }
  };

  const [appliances, setAppliances] = useState(appliancesData);


  const toggleSwitch = (id) => {
    setAppliances((prevState) =>
      prevState.map((appliance) =>
        appliance.id === id
          ? { ...appliance, isOn: !appliance.isOn }
          : appliance
      )
    );
  };


 


  const HomePage = () => (
    <ScrollView style={styles.pageContainer} contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={styles.mainheader}>Good afternoon,Jay!</Text>
     
      <View style={styles.quickLinks}>
        <TouchableOpacity style={styles.quickButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}>
          <Text>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}>
          <Text>Room 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>




      <Text style={styles.sectionTitle}>Appliances</Text>
      {appliances.map((appliance) => (
        <View key={appliance.id} style={styles.applianceCard}>
          <View>
            <Text style={styles.applianceName}>{appliance.name}</Text>
            <Text style={styles.applianceLocation}>{appliance.location}</Text>
            <Text
              style={[
                styles.applianceStatus,
                { color: appliance.isOn ? 'green' : 'red' } // Dynamically set the color
              ]}
            >
              {appliance.isOn ? 'On' : 'Off'}
            </Text>
          </View>
          <Switch
            value={appliance.isOn}
            onValueChange={() => toggleSwitch(appliance.id)}
            ios_backgroundColor="#ccc"
          />
        </View>
      ))}  
    </ScrollView>
  );




  const StatsPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());




  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 3000);




    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);




  const formatTime = (date) => {
    // Format the time and date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString();
    return `${formattedDate}, ${formattedTime}`;
  };
    const standingFandata = [
      { hour: 1, historical: 0.337, prediction: null },
      { hour: 2, historical: 0.39, prediction: null },
      { hour: 3, historical: 0.39, prediction: null },
      { hour: 4, historical: 0.282, prediction: null },
      { hour: 5, historical: 0.301, prediction: null },
      { hour: 6, historical: 0.246, prediction: null },
      { hour: 7, historical: 0.34, prediction: null },
      { hour: 8, historical: 0.39, prediction: null },
      { hour: 9, historical: 0.277, prediction: null },
      { hour: 10, historical: 0.234, prediction: null },
      { hour: 11, historical: 0.21, prediction: null },
      { hour: 12, historical: 0.21, prediction: null },
      { hour: 13, historical: 0.21, prediction: null },
      { hour: 14, historical: 0.21, prediction: null },
      { hour: 15, historical: 0.223, prediction: null },
      { hour: 16, historical: null, prediction: 0.231 },
      { hour: 17, historical: null, prediction: 0.231 },
      { hour: 18, historical: null, prediction: 0.231 },
      { hour: 19, historical: null, prediction: 0.231 },
      { hour: 20, historical: null, prediction: 0.349 },
      { hour: 21, historical: null, prediction: 0.315 },
      { hour: 22, historical: null, prediction: 0.322 },
      { hour: 23, historical: null, prediction: 0.349 },
      { hour: 24, historical: null, prediction: 0.343 },
    ];
   
    const airPurifierData = [
      { hour: 1, historical: 0.541, prediction: null },
      { hour: 2, historical: 0.456, prediction: null },
      { hour: 3, historical: 0.552, prediction: null },
      { hour: 4, historical: 0.581, prediction: null },
      { hour: 5, historical: 0.51, prediction: null },
      { hour: 6, historical: 0.535, prediction: null },
      { hour: 7, historical: 0.572, prediction: null },
      { hour: 8, historical: 0.465, prediction: null },
      { hour: 9, historical: 0.387, prediction: null },
      { hour: 10, historical: 0.376, prediction: null },
      { hour: 11, historical: 0.357, prediction: null },
      { hour: 12, historical: 0.409, prediction: null },
      { hour: 13, historical: 0.35, prediction: null },
      { hour: 14, historical: 0.394, prediction: null },
      { hour: 15, historical: 0.399, prediction: null },
      { hour: 16, historical: null, prediction: 0.375 },
      { hour: 17, historical: null, prediction: 0.385 },
      { hour: 18, historical: null, prediction: 0.385 },
      { hour: 19, historical: null, prediction: 0.397 },
      { hour: 20, historical: null, prediction: 0.518 },
      { hour: 21, historical: null, prediction: 0.558 },
      { hour: 22, historical: null, prediction: 0.611 },
      { hour: 23, historical: null, prediction: 0.606 },
      { hour: 24, historical: null, prediction: 0.610 },
    ];
   
    const televisionData = [
      { hour: 1, historical: 0.014, prediction: null },
      { hour: 2, historical: 0.03, prediction: null },
      { hour: 3, historical: 0.018, prediction: null },
      { hour: 4, historical: 0.024, prediction: null },
      { hour: 5, historical: 0.026, prediction: null },
      { hour: 6, historical: 0.025, prediction: null },
      { hour: 7, historical: 0.028, prediction: null },
      { hour: 8, historical: 0.023, prediction: null },
      { hour: 9, historical: 0.02, prediction: null },
      { hour: 10, historical: 0.014, prediction: null },
      { hour: 11, historical: 0.018, prediction: null },
      { hour: 12, historical: 0.023, prediction: null },
      { hour: 13, historical: 0.17, prediction: null },
      { hour: 14, historical: 0.175, prediction: null },
      { hour: 15, historical: 0.015, prediction: null },
      { hour: 16, historical: null, prediction: 0.017 },
      { hour: 17, historical: null, prediction: 0.017 },
      { hour: 18, historical: null, prediction: 0.018 },
      { hour: 19, historical: null, prediction: 0.021 },
      { hour: 20, historical: null, prediction: 0.191 },
      { hour: 21, historical: null, prediction: 0.193 },
      { hour: 22, historical: null, prediction: 0.026 },
      { hour: 23, historical: null, prediction: 0.024 },
      { hour: 24, historical: null, prediction: 0.022 },
    ];








    const waterDispenserData = [
      { hour: 1, historical: 0.036, prediction: null },
      { hour: 2, historical: 0.066, prediction: null },
      { hour: 3, historical: 0.028, prediction: null },
      { hour: 4, historical: 0.031, prediction: null },
      { hour: 5, historical: 0.028, prediction: null },
      { hour: 6, historical: 0.028, prediction: null },
      { hour: 7, historical: 0.069, prediction: null },
      { hour: 8, historical: 0.191, prediction: null },
      { hour: 9, historical: 0.202, prediction: null },
      { hour: 10, historical: 0.053, prediction: null },
      { hour: 11, historical: 0.031, prediction: null },
      { hour: 12, historical: 0.039, prediction: null },
      { hour: 13, historical: 0.168, prediction: null },
      { hour: 14, historical: 0.152, prediction: null },
      { hour: 15, historical: 0.028, prediction: null },
      { hour: 16, historical: null, prediction: 0.043 },
      { hour: 17, historical: null, prediction: 0.043 },
      { hour: 18, historical: null, prediction: 0.044 },
      { hour: 19, historical: null, prediction: 0.044 },
      { hour: 20, historical: null, prediction: 0.169 },
      { hour: 21, historical: null, prediction: 0.168 },
      { hour: 22, historical: null, prediction: 0.041 },
      { hour: 23, historical: null, prediction: 0.042 },
      { hour: 24, historical: null, prediction: 0.039 },
    ];




    const generateYAxisLabels = (data) => {
      const maxValue = Math.max(
        ...data.map(entry => Math.max(entry.historical || 0, entry.prediction || 0))
      );
      const numberOfLabels = 5;
      const stepSize = (maxValue / numberOfLabels).toFixed(2);
 
      const yAxisLabels = [];
      for (let i = 0; i <= numberOfLabels; i++) {
        yAxisLabels.push((i * stepSize).toFixed(2));
      }
      return yAxisLabels.reverse();
    };




    const renderChart = (data) => {
    const yAxisLabels = generateYAxisLabels(data);
      return (
        <View style={styles.chartWrapper}>
          <View style={styles.yAxisWrapper}>
            <Text style={styles.yAxisText}>kWh</Text>
            <View style={styles.yAxis}>
              {yAxisLabels.map((label, index) => (
                <Text key={index} style={styles.yAxisLabel}>
                  {label}
                </Text>
              ))}
            </View>
          </View>




          <ScrollView horizontal contentContainerStyle={styles.chartContainer}>
            {data.map((entry, index) => (
              <View key={index} style={styles.barGroup}>
                {entry.historical !== null && (
                  <View
                    style={[styles.bar, { height: entry.historical * 200, backgroundColor: '#007AFF' }]}
                  />
                )}
                {entry.prediction !== null && (
                  <View
                    style={[styles.bar, { height: entry.prediction * 200, backgroundColor: '#FFA500' }]}
                  />
                )}
                <Text style={styles.xAxisLabel}>{entry.hour}</Text>
              </View>
            ))}
          </ScrollView>




          <Text style={styles.xAxisText}>Hour</Text>
        </View>
      );
    };




    return (
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTimeText}>
            {formatTime(currentTime)}
          </Text>
      </View>




      </View>
        <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.legendBox, { backgroundColor: '#007AFF' }]} />
              <Text style={styles.legendText}>Historical</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendBox, { backgroundColor: '#FFA500' }]} />
              <Text style={styles.legendText}>Prediction</Text>
            </View>
          </View>
       
        <View style={styles.pageContainer}>




          <Text style={styles.header}>Standing Fan Power Usage</Text>
          {renderChart(standingFandata)}




 
          <Text style={styles.header}>Air Purifier Power Usage</Text>
          {renderChart(airPurifierData)}
 
          <Text style={styles.header}> Television Power Usage</Text>
          {renderChart(televisionData)}
 
 
          <Text style={styles.header}> Water Dispenser Power Usage</Text>
          {renderChart(waterDispenserData)}
          </View>
          </ScrollView>
    </SafeAreaView>


    );
  };  




  return (
    <SafeAreaView style={styles.container}>
      {renderPage()}
      {currentPage !== 'cover' && (
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setCurrentPage('home')}
          >
            <Text style={currentPage === 'home' ? styles.activeTabText : styles.tabText}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setCurrentPage('stats')}
          >
            <Text style={currentPage === 'stats' ? styles.activeTabText : styles.tabText}>
              Stats
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'space-between',


  },
 
  coverScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A2A9B9',
  },
  coverIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  coverText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000099',
  },




  pageContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F4F8',
  },




  dateTimeContainer: {
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  dateTimeText: {
    fontSize: width > 600 ? 18 : 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  mainheader: {
    fontSize: width > 600 ? 24 : 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },


  header: {
    fontSize: width > 600 ? 24 : 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  quickButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: width > 600 ? 24 : 20,
    fontWeight: '600',
    marginVertical: 20,
  },
  applianceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  applianceName: {
    fontSize: 16,
    fontWeight: '500',
  },
  applianceStatus: {
    fontSize: 14,
    marginTop: 4,
  },
  applianceLocation: {
    fontSize: 14,
    color: '#666',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom:width > 600 ? -15 : -25,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },


  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  chartWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 0,
  },
  yAxisWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
   
  },
  yAxis: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  yAxisLabel: {
    fontSize: width > 600 ? 14 : 12,
    color: '#666',
   
  },
  yAxisText: {
    textAlign: 'center',
    fontSize: width > 600 ? 16 : 14,
    color: '#666',
    marginBottom: 5,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
   
  },
  barGroup: {
    alignItems: 'center',
    width: width > 600 ? 55 : 20,
    marginHorizontal: 2,
  },
  bar: {
    width: 8,
    marginBottom: 2,
    borderRadius: 4,
  },
  xAxisLabel: {
    fontSize: 10,
    marginTop: 4,
  },
  xAxisText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
  legendContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendBox: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
  mainAppContainer: {
      flex: 1,
     
    },
});






export default App;









