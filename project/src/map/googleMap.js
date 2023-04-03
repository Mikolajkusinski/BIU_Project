import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'


function Map(){
    const {isLoaded} = useJsApiLoader({googleMapsApiKey: process.env.GOOGLE_API_KEY,})

    if(!isLoaded){
        return <SkeletonText/>
    }

    retrun(
    <div>
        <GoogleMap/>
    </div>
    );
}

export default Map;