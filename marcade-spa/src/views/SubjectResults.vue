<template>
    <div class="container-fluid py-5 px-10">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-between">
                    <h4 class="display-1">Second Term, 2014/2015 Session</h4>
                </div>
                <div class="w-100 d-flex justify-space-between align-center">
                    <div class="lead"> Class: SS3B </div>
                </div>
                <div class="w-100 d-flex align-center justify-space-between ml-0 pl-0">
                    <v-select
                    class="col-md-4 ml-0 pl-0"
                    v-model='selectedSubject'
                    :items='subjects'
                    placeholder='Select a subject to view results and result analysis'
                    item-text='title'
                    item-value='id'
                    return-object
                    >
                    </v-select>
                 <div class="d-flex align-center">
                    <button class="btn btn-primary btn-md align-self-center">View Result Analysis</button>
                    <button class="btn btn-warning btn-md align-self-center ml-3">Print Subject Results</button>
                    <button class="btn btn-danger btn-md align-self-center  mx-3">Download Subject Results</button>
                    <button class="btn btn-info btn-md align-self-center ">Upload SUbject Results (Excel, CSV) </button>
                 </div>
                </div>
            </div>
        </div>
         <div class="row" v-if='selectedSubjectName'>
            <div class="col-sm-12 text-center">
                <h4 class="text-left display-1 my-2"> {{ selectedSubjectName }} </h4>
                  <v-data-table
                    :headers="headers"
                    :items="students"
                    loading-text="Loading... Please wait"
                    :items-per-page="50"
                    class="elevation1 my-table"
                    :footer-props="{
                            itemsPerPageOptions: [50],
                    }"
                >
                
                   <template  v-slot:body="{ items }">
                    <tbody  > 
                        <tr v-for="item in items"  :key="item.name">
                            <td>{{ item.id }}</td>
                            <td>{{ item.full_name }}</td>
                            <td> 
                                {{ item.score }}
                            </td>
                            <td>
                               {{ item.position }}
                            </td>
                             <td>
                               <v-chip v-if='item.score >= 50' color='success '>
                                   passed
                               </v-chip>
                               <v-chip v-else color='red text-white whiten--text'>
                                   failed
                               </v-chip>
                            </td>
                        </tr>
                    </tbody>
                </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubjectResults',
    computed: {
        selectedSubjectName() {
            return this.selectedSubject.title;
        }
    },
    data() {
        return {
            selectedSubject: {},
            subjects: [
                {
                    id: 1, 
                    title: 'Mathematics'
                },
                {
                    id: 2, 
                    title: 'English'
                },
                {
                    id: 3, 
                    title: 'Biology'
                },
                {
                    id: 4, 
                    title: 'French'
                },
            ],
             students: [
                {
                    id: 1,
                    full_name: 'Ogunboyejo Olatunde',
                    score: 78,
                    position: 1,
                },
                {
                    id: 2,
                    full_name: 'Daramola Boluwatife',
                    score: 48,
                     position: 2,
                },
                {
                    id: 3,
                    full_name: 'Olufotebi Ifeoluwa',
                    score: 78,
                    position: 3,
                }
            ],
              headers: [
                {
                    text: 'Student ID',
                    value: 'id'
                },
                 {
                    text: 'Full Name',
                    value: 'full_name'
                },
                 {
                    text: 'Score',
                    value: 'score'
                },
                {
                    text: 'Position',
                    value: 'position'
                },
                 {
                    text: 'Status',
                    value: 'status'
                },
            ],
        }
    }
}
</script>

<style>

</style>
