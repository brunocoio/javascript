primeiro projeto
chocolathey
node, python, jdk8
variáveis de ambiente

//criar projeto
npx react-native init AwesomeProject

//entrar na pasta
cd AwesomeProject

//executar react
npx react-native start

//executar no app
npx react-native run-android


//novo projeto
npx react-native init novoProjeto
//executa o start e depois o run-android

//expocli
npm install -g expo-cli

expo init AwesomeProject
//expo-template-blank

    importar componente
    importar estilo
    console.warn
    props
    fragment
    Button 
    onPress
    usestate (rooks)
    snippet
    comunicação direta e indireta (hierarquia ou não pai/filho/neto)
    Platform (diferenciar androis e ios)
    FlatList
    componente controlado
    textinput
    flexbox
    render
    this.props
    flexWrap

Projeto calculadora
    Dimensions.get('window').width
    TouchableHighlight
    numberOfLines

Projeto Mina
    react-native log-andoid (log-ios)
    push
    reduce
    concat
    had
    filter
    TouchableWithoutFeedback
    TouchableOpacity
    Modal
    animationType
    onLevelSelected

Navegação
    createStackNavigator
    screenOptions={{ headerShown: true }}
    navigation.navigate
    navigation.push
    npm install --save react-native-vector-icons
    npx react-native link react-native-vector-icons

rncrud
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/native-stack
    npm install react-native-elements/react-native-elements
    npm install react-native-vector-icons
    initialRouteName
    screenOptions
    npx react-native link react-native-vector-icons
    FlatList
    ListItem
    Alert
    Redux

tasktodo
    java 12.0
    node 12.14
    npm 6.13
    npx react-native init tasks --version 0.61.5
    npm i
    npx react-native link
    npx react-native run-android (run-ios)
    render
    source
    flex = flexGrow
    moment
    estimateAt
    doneAt
    flatList
    TouchableWithoutFeedback
    TouchableOpacity
    Platform
    transparent
    onRequestClose
    animationType
    TextInput
    onChangeText
    activeOpacity
    [IOS] - pod install //dentro da pasta ios
    Swipeable
    AsyncStorage
    JSON.stringify
    JSON.parse

tasktodo - backend
    npm init -y
    npm i -s express body-parser cors consign 
    npm i -s bcrypt-nodejs jwt-simple passport passport-jwt
    npm i -s knex pg
    npm i -s moment
    npm i --save-dev nodemon
    psql 9.5.14 (9.5.25)
    npm i knex -g
    knex init
    knex migrate:make create_table_users
    knex migrate:make create_table_tasks
    knex migrate:latest
    knex migrate:rollback
    .env
    Bearer //aplicar no header da aplicação junto da key

instagram - lambe
    npx react-native init --version-"0.56.0" lambe
    emulator -no-snapshot -avd Nexus_5x_API_28_x86
    npx react-native link
    npx react-native run-android (run-ios)
    Image
    Dimensions
    Gravatar
    TouchableWithoutFeedback as TWF
    onSubmitEditing
    ScrollView
    ImagePicker
    resizeMode
    keyboardType
    onChangeText
    secureTextEntry
    createStore
    combineReducers
    compose
    applyMiddleware
    Provider
    dispatch
    concat
    firebase https://lambe-1c50c-default-rtdb.firebaseio.com/
    npm install -g firebase-tools
    firebase init
        firebase login
    firebase deploy
