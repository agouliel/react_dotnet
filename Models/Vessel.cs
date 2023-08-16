using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_new_app.Models
{
    [Table("Vessels")]
    public class Vessel //: EntityBase
    {
        [StringLength(128)]
        [Key]
        public string VesselId { get; set; }

        [StringLength(128)]
        public string VesselName { get; set; }

        public int? ShipType1 { get; set; }

        public int? ShipType2 { get; set; }

        public decimal? GrossTonnage { get; set; }

        public decimal? DeadWeight { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0: dd/MM/yyyy HH:mm}")]
        public DateTime? YearOfBuilt { get; set; }

        [StringLength(256)]
        public string Builder { get; set; }

        [StringLength(128)]
        public string CountryBuild { get; set; }

        public int? HullNum { get; set; }

        public string IMO { get; set; }

        public decimal? SpeedLaden { get; set; }

        public decimal? SpeedBallast { get; set; }

        public string OwningCompany { get; set; }

        public decimal? Opex { get; set; }

        public decimal? SludgeCapacity { get; set; }

        public decimal? BilgeCapacity { get; set; }

        public decimal? SlopsCapacity { get; set; }

        public int? IFOType { get; set; }

        public decimal? HeatingPreserveIFO { get; set; }

        public decimal? HeatingPreserveMGO { get; set; }

        public decimal? HeatingBuildIFO { get; set; }

        public decimal? HeatingBuildMGO { get; set; }

        public decimal? IFOLaden { get; set; }

        public decimal? MGOLaden { get; set; }

        public decimal? IFOBallast { get; set; }

        public decimal? MGOBallast { get; set; }

        public decimal? IFOWhileLoading { get; set; }

        public decimal? MGOWhileLoading { get; set; }

        public decimal? IFOWhileDischarge { get; set; }

        public decimal? MGOWhileDischarge { get; set; }

        public decimal? IFOWhileIdle { get; set; }

        public decimal? MGOWhileIdle { get; set; }

        public decimal? IFOInerting { get; set; }

        public decimal? Pitch { get; set; }

        public decimal? MGOInerting { get; set; }

        public bool IsSold { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0: dd/MM/yyyy HH:mm}")]
        public DateTime? SoldDate { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0: dd/MM/yyyy HH:mm}")]
        public DateTime dtEnteredDate { get; set; }

        public int? FleetId { get; set; }

        [StringLength(128)]
        public string Email { get; set; }

    }

}

