import React from 'react';
import SideNav from './DashboardSideNav';
import CreatePostForm from './createpost.component';

const ProductCreate = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />
                </div>

                <div className="col-md-10">
                    <CreatePostForm />

                </div>
            </div>
        </div>
    );
};

export default ProductCreate;