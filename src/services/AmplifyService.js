// src/services/AmplifyService.js
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getMedication } from '../graphql/queries';

const AmplifyService = {
  async getMedication(barcode) {
    const response = await API.graphql(graphqlOperation(getMedication, { barcode }));
    return response.data.getMedication;
  }
};

export default AmplifyService;
