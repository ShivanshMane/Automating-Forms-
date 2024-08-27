// Assuming you have the EndLinePackageQualityForm and ProductionEndOfShiftCount components
import React from 'react';
import EndLinePackageQualityForm from './EndLinePackageQualityForm';
import ProductionEndOfShiftCount from './ProductionEndOfShiftCount';

const WorkerForm = () => {
    return (
        <div>
            <EndLinePackageQualityForm />
            <ProductionEndOfShiftCount />
        </div>
    );
};

export default WorkerForm;
