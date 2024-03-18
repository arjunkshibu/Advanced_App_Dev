import React from "react";
import { BookCopy, DollarSign, Users, CreditCard, Laptop, University, Handshake, GraduationCapIcon, Building2, HeartHandshake } from "lucide-react";
import AdminsideBar from "../../components/Admin/AdminsideBar";

const AdminDashboard = () => {
  return (
    <div className="-z-10">
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="grid grid-cols-3 grid-rows-3 gap-4 ml-32">
          <div class="h-52 w-96 bg-gray-200 flex flex-col justify-center hover:bg-syn-lb items-center">
            <div class="flex items-center hover:bg-teal-300 justify-center">
              <Users size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Users-110547
            </div>
          </div>
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <CreditCard size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Payments-7400
            </div>
          </div>{" "}
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <DollarSign size={50} />
            </div>
            <div class="flex flex-wrap justify-center items-center text-4xl">
              Funds-$253,300
            </div>
          </div>          <div class="h-52 w-96 bg-gray-200 hover:bg-syn-lb flex flex-col justify-center items-center">
            <div class="flex items-center justify-center">
              <Laptop size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Courses-2122
            </div>
          </div>
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <University size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Universities - 555
            </div>
          </div>{" "}
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <Handshake size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Placements-75012
            </div>
          </div>
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <GraduationCapIcon size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Internships-89257
            </div>
          </div>
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <Building2 size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Recruiters-5436
            </div>
          </div>
          <div class="h-52 w-96 bg-gray-200 flex flex-col hover:bg-syn-lb justify-center items-center">
            <div class="flex items-center justify-center">
              <HeartHandshake size={50} />
            </div>
            <div class="flex justify-center items-center text-4xl">
              Sponsors-783
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AdminDashboard;
